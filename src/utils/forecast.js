const request=require('request')
const geocode=require('./geocode.js')


const forecast=(long,lat,callback)=>{
    const url='https://api.darksky.net/forecast/7fa2ad040ad4e149ddd393eb06ace868/'+long+','+lat
    request({url,json:true},(error,{body}) => {
     
        if(error){
            callback('Unable to connect the server',undefined)
        }
        else{
             callback(undefined,{
                 temp:body.currently.temperature,
                 rainchance:body.currently.precipProbability
                                    }
                                )
                             }
                         })
        }       







module.exports=forecast