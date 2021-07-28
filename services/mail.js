const nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');


const send = async({mail, asunto = 'Gracias por registrarte!!!', cuerpo}) => {
    try{
    const transporter = nodemailer.createTransport({
        /*host: 'smtp.gmail.com',
        port: 587,
        secure: false,*/
        service : process.env.MAIL_SERVICE,
        auth : {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        }
    });
    const info = {
        /*to: 'nicolasfullone0801@gmail.com',
        subject: 'Gracias por registrarte!!!',
        html: '<h2> GRACIAS!!! </h2>',*/
                                                //from: '<no-reply>nicolasfullone0801@gmail.com<no-reply>',
        to: mail,
        subject: asunto,
        html: cuerpo,
    };
    const {messageId} = await transporter.sendMail(info);
    return messageId;
}
    catch(e) {
        console.log(e);
    }
}


module.exports = {send};