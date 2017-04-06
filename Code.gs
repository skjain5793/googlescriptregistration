
function doGet() {
  return HtmlService.createHtmlOutputFromFile('form')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);

  
 }






function uploadFileToDrive(base64Data, fileName, name, number, index, rollno) {
  try{
    var rollno = rollno;
    var splitBase = base64Data.split(','),
        type = splitBase[0].split(';')[0].replace('data:','');

    var byteCharacters = Utilities.base64Decode(splitBase[1]);
    var ss = Utilities.newBlob(byteCharacters, type);
    //ss.setName(fileName);
    ss.setName(name+'-'+rollno);
    var dropbox = 'All India Open Challenge Tier 3 Students Images';
    var folder, folders = DriveApp.getFoldersByName(dropbox);

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    var file = folder.createFile(ss);

    return file.getName();
  }catch(e){
    return 'Error: ' + e.toString();
  }
}


function getValues(name,email,rollno,mobile){
  //var s = Utilities.formatDate(new Date(), "IST", "MM-dd-yyyy HH:mm:ss");

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  /* var spreadsheet = SpreadsheetApp.openById("");
   var sheet = spreadsheet.getSheetByName("Sheet1");*/
   sheet.appendRow([name,email,rollno,mobile]);


}






