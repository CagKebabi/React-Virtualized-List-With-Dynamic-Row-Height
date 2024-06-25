import React from 'react'
import ReactDOM from 'react-dom/client'
import { AutoSizer, List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import "./app.css"
const list = [
  {name:"dfdf",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, perferendis?"},
  {name:"dfdf",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita consequatur exercitationem eaque dolorem voluptatibus quam modi voluptate soluta temporibus harum suscipit, veritatis, maiores officia perspiciatis error rem quod, tempora alias mollitia architecto deleniti magnam maxime illum. Doloribus aut, voluptas voluptatibus eaque sit tempore id rem. Minus, alias? Vero, reprehenderit?"},
  {name:"dfdf",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, iste dignissimos. Id labore necessitatibus eligendi!"},
  {name:"dfdf",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo sequi nesciunt vero corrupti perferendis laborum magnam necessitatibus, earum tempora."},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  {name:"dfdf",description:""},
  // And so on...
];

//CellMeasurerCache oluşturun
const cache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 50,
});

//
function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
  parent,
}) {
  return (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      {({measure, registerChild}) => (
        <div key={key} style={style}>
          <div className='boxContainer' style={{whiteSpace:"normal"}}>
            <div>
              <div>A</div>
              <div>
                <div>{list[index].name}</div>
                <div>Post Date</div>
              </div>
            </div>
            <div>
              {list[index].description}
            </div>
            <div>
              <svg class="MuiSvgIcon-root" height={15} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
            </div>
            <div>
              <svg class="MuiSvgIcon-root" height={15} focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path></svg>
            </div>
          </div>
        </div>
      )}
      
    </CellMeasurer>

  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="container" style={{width:"100%", height:"50vh"}}>
    <AutoSizer>
      {({height, width}) => (
            <List
            width={width}
            height={height}
            rowCount={list.length}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
            className='virtualizedList'
            //autoHeight={true}
            deferredMeasurementCache={cache}
          />
      )}
    </AutoSizer>
  </div>
  // <div className="container">
  //   <List
  //     width={300}
  //     height={300}
  //     rowCount={list.length}
  //     rowHeight={20}
  //     rowRenderer={rowRenderer}
  //   />
  // </div>
)
