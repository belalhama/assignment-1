console.log("Question 1");

function logFileInfo(){
    console.log({File:__filename, Dir:__dirname});

}

logFileInfo();

console.log(" ");
//-----------------------------------------------------------------------------------------------------------

console.log("Question 2");

const path = require("path");

function getFileName(filePath) {
  return path.basename(filePath);
}
 
console.log(getFileName("/user/files/report.pdf"));

console.log(" ");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 3");

function buildPath(pathObject) {
  return path.format(pathObject);
}
 

console.log(buildPath({ dir: "/folder", name: "apps", ext: ".js" })); 

console.log(" ");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 4");

function getExtension(filePath) {
  return path.extname(filePath);
}
 
console.log(getExtension("/docs/readme.md")); 

console.log(" ");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 5");

function parsePath(filePath) {
  const parsed = path.parse(filePath);
  return { Name: parsed.name, Ext: parsed.ext };
}
 

console.log(parsePath("/home/app/main.js"));

console.log(" ");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 6");

function checkIsAbsolute(filePath) {
  return path.isAbsolute(filePath);
}
 

console.log(checkIsAbsolute("/home/user/file.txt")); 
console.log(checkIsAbsolute("./relative/file.txt"));

console.log(" ");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 7");

function joinSegments(...segments) {
  return path.join(...segments);
}
 
console.log(joinSegments("src", "components", "App.js"));

console.log(" ");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 8");

function resolvePath(relativePath) {
  return path.resolve(relativePath);
}
 

console.log(resolvePath("./index.js"));

console.log(" ");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 9");

function joinTwoPaths(pathA, pathB) {
  return path.join(pathA, pathB);
}
 
console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

console.log(" ");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 10");

const fs = require("fs");
 
function deleteFileAsync(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err.message);
      return;
    }
    const fileName = path.basename(filePath);
    console.log(`The ${fileName} is deleted.`);
  });
}
 
const testFile = path.join(__dirname, "temp-delete-test.txt");
fs.writeFileSync(testFile, "temporary content");
deleteFileAsync(testFile);

console.log("");

//-----------------------------------------------------------------------------------------------------------

console.log("Question 11");

function createFolderSync(folderPath) {
  try {
    fs.mkdirSync(folderPath);
    return "Success";
  } catch (err) {
    if (err.code === "EEXIST") {
      return "Success";
    }
    console.error("Error creating folder:", err.message);
    return "Failed";
  }
}
 
const newFolder = path.join(__dirname, "myNewFolder");
console.log(createFolderSync(newFolder));

console.log(" ");

//-------------------------------------------------------------------------------------------------------------

console.log("Question 12");

const EventEmitter = require("events");
 
const myEmitter = new EventEmitter();
 
myEmitter.on("start", () => {
  console.log("Welcome event triggered!");
});
 
myEmitter.emit("start");

console.log(" ");

//---------------------------------------------------------------------------------------------------------------

console.log("Question 13");
  
myEmitter.on("login", (username) => {
  console.log(`User logged in: ${username}`);
});
 
myEmitter.emit("login", "Ahmed");

console.log("");

//-----------------------------------------------------------------------------------------------------------------

console.log("Question 14");

 
function readFileSyncContent(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  console.log("the file content =>", `"${content}"`);
  return content;
}
 
readFileSyncContent("./notes.txt");

console.log("");

//-----------------------------------------------------------------------------------------------------------------

console.log("Question 15");

function writeFileAsync(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writing file:", err.message);
      return;
    }
    console.log(`Successfully wrote to ${filePath}`);
  });
}
 
writeFileAsync("./async.txt", "Async save");

console.log("");

//-----------------------------------------------------------------------------------------------------------------

console.log("Question 16");

function checkExists(targetPath) {
  return fs.existsSync(targetPath);
}
 
console.log(checkExists("./notes.txt")); 
console.log(checkExists("./doesNotExist.txt"));

console.log("");

//-----------------------------------------------------------------------------------------------------------------

console.log("Question 17");

const os = require("os");
 
function getSystemInfo() {
  return { Platform: os.platform(), Arch: os.arch() };
}
 
console.log(getSystemInfo());