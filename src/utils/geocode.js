const request=require('request')


const geocode=(place,callback) =>{
         const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ place +'.json?access_token=pk.eyJ1IjoidnByYWthc2h0aGFwbGl5YWxnbWFpbGNvbSIsImEiOiJjanljbXR6dmgwanlwM2dsbDJxOHRtN3g4In0.folU6DdaKKgXAL0ctKwMvQ'

          request({url,json:true},(error,{body}) =>{
            if(error){
                callback('Unable to connect location server',undefined)
            }
            else if(body.features.length===0){
                callback('Unable to find location',undefined)
            }
            else{
                callback(undefined,{
                    longitude:body.features[0].center[0],
                    latitude:body.features[0].center[1],
                    location:body.features[0].place_name
                })
            }
          })

}


module.exports=geocode