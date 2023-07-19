const FOLDER_ID = "Your FOlder ID Goes Here Between Quotes";

/**
 * Function iterates through the given folder and removes all the duplicate files.
 * Criteria to be a duplicate is having same file name and size.
 */
function removeDuplicateFiles() {
  const folder = DriveApp.getFolderById(FOLDER_ID);

  // get files in that folder
  const files = folder.getFiles();
  const fileList = [];

  // if folder is empty
  if (!files.hasNext()) return;

  //else
  while (files.hasNext()) {
    const file = files.next(),
      name = file.getName(),
      size = file.getSize();
     
    /* 
        console.log(name);
        console.log(size);
       
     */
    // checking this way makes sure that first duplicate file or one of all duplicates is not deleted
    if (isDuplicateFile(fileList, name, size)) {
      console.log("Duplicate File Found," + name);
      // delete file
      file.setTrashed(true);
    }
    else {
      console.log("Duplicate File not found")
      fileList.push([name, size])
    }
  }

}


/**
 * Function takes the list will all the files with their details and compares them with given fileName and size.
 * If both are exactly same than it returns true hence duplicate else false.
 */
function isDuplicateFile(fileList, fileName, fileSize) {
  for (let i = 0; i < fileList.length; i++) {
    // if the name and size of file in current loop are equal to the ones given then return true
    if (fileList[i][0] === fileName && fileList[i][1] === fileSize) return true;
   
  }
   // else return false
    return false;
}



























