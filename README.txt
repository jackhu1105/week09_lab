啟動方式
啟動後端（Node.js + Express）

1 進入 server 目錄 cd server

2 安裝 npm install

3 啟動開發模式 npm run dev

後端預設運作於： http://localhost:3000

  
啟動前端
API 文件

API 主路徑： /api/signup


POST /api/signup 提交報名資料
  
GET /api/signup 回傳報名清單
回傳： { “total”: 3, “data”: […] }
  

測試方式（至少二選一）

1：VS Code REST Client  開啟 tests/api.http  點選 Send Request

2：Postman  Import  tests/signup_collection.json

3：curl script  執行： sh tests/curl_test.sh

 
 
