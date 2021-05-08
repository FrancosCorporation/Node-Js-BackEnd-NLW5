# Node-Js-BackEnd-NLW5

Este projeto vai ser criado com base nas aulas de Node js da Next Level Week do canal Rockeseet


install the packge :

*-- Dont have typescript module, install for this comand --*

npm install typescript --save-dev

*-- Init the file tsconfig.json --*

yarn tsc --init
*-- Change the value of strict for false, for dont contains checkeding all the time --*

*-- Install the express module --*

npm install express --save

*-- Install the express types-module --*

yarn add @types/express -D

*-- Install the tradutor ts mode --*

yarn add ts-node-dev -D

*-- Inside from the packge.json  --*

"scripts":{
"dev":"ts-node-dev src/server.ts"
},

*-- Kill aplication in node --*
pkill node

*--Run the aplication --*
yarn dev


*-- install the typeorm with DB  in  https://typeorm.io/#/ --*

npm install typeorm reflect-metadata sqlite3

*-- Create Migration --*

yarn typeorm migration:create -n CreateSettingscls


*-- Add Module uuid packge --*

yarn add uuid

*-- Add uuid types - packge --*

yarn add @types/uuid -D


*-- Add Module socket.io --*

yarn add socket.io

*-- Add socket.io Types--*

yarn add @types/socket.io -D

*-- Add Module EJS--*

yarn add ejs


*-- Add Module socket.io - Client --*

yarn add socket.io-client


