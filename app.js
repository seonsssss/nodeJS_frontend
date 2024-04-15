const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

const {sequelize} = require('./models');
const indexRouter = require('./routes');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 8001);

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});

sequelize.sync({force : false})
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })

app.use(express.static(path.join(__dirname, 'public')));


app.use('/',indexRouter);
app.use('/user',userRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});