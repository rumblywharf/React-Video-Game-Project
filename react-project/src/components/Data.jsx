import videoGames from './dataFile.json';
import React, {useMemo} from 'react';

const DataPage = () => {
  const games = useMemo(() => videoGames, []);

  //var consoleFilter;
  //var result = videoGames.filter(games=> games.System == consoleFilter);

  //if(document.getElementById("consoles").value === "1"){
  //  consoleFilter = "Playstation 4";
  //}
  //if(document.getElementById("consoles").value === "2"){
  //  consoleFilter = "Playstation 5";
  //}
  //if(document.getElementById("consoles").value === "3"){
  //  consoleFilter = "Xbox One";
  //}
  //if(document.getElementById("consoles").value === "4"){
  //  consoleFilter = "Xbox Series X";
  //}
  //if(document.getElementById("consoles").value === "5"){
  //  consoleFilter = "Nintendo Switch";
  //}
  //if(document.getElementById("consoles").value === "6"){
  //  consoleFilter = "PC";
  //}
  return(
<>
    <div className="DataPage">

    <header>
      <h1>Gaming Data</h1>
    </header>

          <form>
          <h3>Filter By:</h3>
            <select id="consoles">
              <option value="1">Playstation 4</option>
              <option value="2">Playstation 5</option>
              <option value="3">Xbox One</option>
              <option value="4">Xbox Series X</option>
              <option value="5">Nintendo Switch</option>
              <option value="6">PC</option>
            </select>
          </form>

      <table className="dataTable">
      <thead>
        <tr>
          <td> <h4>Game Title</h4> </td>
          <td> <h4>Console</h4> </td>
          <td> <h4>Price</h4> </td>
        </tr>
      </thead>

      {games.map((game, i) => (
      <tbody>
        <td>{game.Game}</td>
        <td>{game.System}</td>
        <td>{game.Price}</td>
      </tbody>
      ))}
      </table>
    </div>
    </>
  );
}
export default DataPage;
