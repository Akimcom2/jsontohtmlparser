

function ParseJsonToHtml() {
        let data2 = [
    {
      "GUID": "1",
      "Name": "1",
      "DLOG": "1995-06-30T01:01:01"
    },
    {
      "GUID": "2",
      "Name": "2",
      "DLOG": "1995-06-30T01:01:01"
    },
    {
      "GUID": "3",
      "Name": "3",
      "DLOG": "1995-06-30T01:01:01"
    },
    {
      "GUID": "4",
      "Name": "4",
      "DLOG": "1995-06-30T01:01:01"
    },{
      "GUID": "5",
      "Name": "5",
      "DLOG": "1995-06-30T01:01:01"
    },{
      "GUID": "2",
      "Name": "2",
      "DLOG": "1995-06-30T01:01:01"
    },{
      "GUID": "2",
      "Name": "2",
      "DLOG": "1995-06-30T01:01:01"
    },{
      "GUID": "2",
      "Name": "2",
      "DLOG": "1995-06-30T01:01:01"
    },{
      "GUID": "2",
      "Name": "2",
      "DLOG": "1995-06-30T01:01:01"
    }

  ]
  for(let i = 0; i < data2.length; i++) {
    let obj = data2[i];
    //Создаем блок-приемник html для нашего json
    document.body.insertAdjacentHTML( 'afterend', '<div id="myID2", style="margin: 5px; padding: 50px; font-size: 18px; border: 3px solid">GUID:<span id="GUID"></span><br>Name: <span id="Name"></span><br>DLOG: <span id="DLOG"></span><br></div>' );
    
    document.getElementById('GUID').innerHTML = obj.GUID;
    document.getElementById('Name').innerHTML = obj.Name;
    document.getElementById('DLOG').innerHTML = obj.DLOG;
}
}
        window.onload = ParseJsonToHtml;
