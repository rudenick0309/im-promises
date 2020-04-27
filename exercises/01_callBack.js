const fs = require("fs");
const request = require("request");

/*
 * 아래 함수는 파일에 있는 데이터들을 한 줄 씩 Array에 담아 callback 함수에 주어야합니다.
 *
 * 예)
 *
 * 파일 내용
 * 윤상호
 * 구일모
 * 이호용
 * 정진석, 박준홍
 * 최규홍
 *
 * callback 함수에 넘겨 줄 Array
 * ["윤상호", "구일모", "이호용", "정진석, 박준홍", "최규홍"]
//  */

// const getDataFromFile = undefined;
const getDataFromFile =function(filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if(err) {
      // console.dir(err);
      // err.code ='ENOENT'
      // console.log(err.code)
      // return 'ENOENT';
      return callback(err, null)
    } else {
      // let arrData = [].push(data)
      let test= data.split('')
      let newArr = test.filter( e => {
        return Number(e);
      })
      console.log('타입', newArr);

      let newData = [];
      newData.push(data)
      console.log(newData);
      console.log('에러이데이터', data)

       callback(null, newArr);
    }
  })
}


//
// /**
//  * 아래 함수는 항상 Http Response의 Body를 callback함수에 넘겨주어야 합니다.
//  * Request 라이브러리를 사용해 Http request를 보냅니다.
//  */

// const getBodyFromGetRequest = undefined;
const getBodyFromGetRequest =function(url, callback) {
  request(url, function (err, body) {
    if(err && !body) {
      // console.log('Invalid URI "none"')
      return callback(err, null)
    } else if (!err && body) {
      // var data = JSON.parse(body);
      console.log('데이터 불린', Array.isArray(body))
      console.log('데이터 body', JSON.parse(body.body))
      // var body = body.body
      // console.log(JSON.stringify(body).body[0].name)
      return callback(null, JSON.parse(body.body))
    }
  })
};

module.exports = {
  getDataFromFile: getDataFromFile,
  getBodyFromGetRequest: getBodyFromGetRequest
};
