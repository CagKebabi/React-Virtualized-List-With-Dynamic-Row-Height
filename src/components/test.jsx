import { List, AutoSizer } from "react-virtualized";

function App() {
  // max length of array - 10.000.000
  items = new Array(500).fill();

//   renderRow = ({ index, key, style }) => {
//     index++;
//     return (
//       <div key={key} style={{ ...style, border: "1px solid black" }}>
//         <h1 style={{ float: "left", marginLeft: "40px" }}>
//           {"List Item " + index}
//         </h1>
//       </div>
//     );
//   };

  return (
    <div className="App" style={{ height: "100vh" }}>
        <AutoSizer>
        {({ height, width }) => {
            return (
            <List
                height={height}
                rowHeight={80}
                //rowRenderer={this.renderRow}
                rowCount={this.items.length}
                overscanRowCount={5}
                width={width}
            />
            );
        }}
        </AutoSizer>
    </div>
  )
}

export default App