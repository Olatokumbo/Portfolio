const nodemailer=require("nodemailer");
const mailGun=require("nodemailer-mailgun-transport");

const auth={
auth:{
    api_key:"b65cf619bfdf4651186540c9f799613b-9dfbeecd-8eb5c1e8",
    domain:"sandbox2cca70d2cce544dbb18824582b02fe65.mailgun.org"
}
};

const transporter=nodemailer.createTransport(mailGun(auth));
const sendMail = (email, name,message, cb) =>{
    const mailOptions={
        from: email,
        to: "faithodesola@gmail.com",
        subject: "Message from "+name,
        text:message
    };
    transporter.sendMail( mailOptions, function(err, data){
        if(err)
        cb(err, null)
        else
        cb(null, data);
    });
}

module.exports=sendMail;