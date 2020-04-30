//깃 커밋 후 깃헙 풀리퀘스트 오류 발생해서 테스트 중. 임의 삭제함.
//고고 파일

const fetchUsersAndWriteToFile = (readFilePath, writeFilePath) => {
	return getDataFromFilePromise(readFilePath)
		.then((results) =>
			results.map((result) => {
				return getBodyFromGetRequestPromise(BASE_URL + result);
			})
		)
		.then((res) => {
			// res.json();
			return Promise.all(res);
		})
		.then((prom) => {
			let arr = prom.map((pro) => `${pro.name}\n`);

			return writeFilePromise(writeFilePath, arr.join(""));
		});
};
