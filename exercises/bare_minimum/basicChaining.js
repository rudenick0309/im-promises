/*
 * 다음 함수를 CALLBACK 없이 작성하세요.
 * (1) `readFilePath` 파라미터를 통해 파일의 첫번째 줄을 읽어옵니다. (여기엔 GitHub username이 담겨있습니다.)
 * (2) 그리고, 그 username과 함께 GitHub API에 요청을 보내, 프로파일을 가져옵니다. (JSON 형태로 응답이 옵니다.)
 * (3) 그리고, 그 프로파일을, `writeFilePath` 파라미터에 담긴 파일에 저장합니다. (텍스트 형태로 저장합니다.)
 *
 * HINT: 새로 구현하지 마세요. 이전에 연습문제에서 export한 함수가 Promise를 리턴했던 것을 기억하세요!
 */

var fs = require('fs');
var util = require('util');

var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync;
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;
var writeFileAsync = util.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
