function getCookies () {
        var res = document.cookie.split ( "; " ).map ( x =>  {
                var tmp = x.split ( "=" )
                var elem = {}
                elem [ tmp [0] ] = tmp [1]
                return elem
        })
        return Object.assign ( {}, ...res )
}
var cookieInfo=getCookies()

if (!cookieInfo.userName){
var script= document.head.appendChild(document.createElement("script"))
script.src="https://cdn.rawgit.com/chrisveness/crypto/4e93a4d/sha256.js"

var formElements=[
    {
        tagName: "input",
        attrs:{
            placeholder:"Login",
        },
        event: "change",
        callback: function(event){
            document.cookie=`userName=${event.target.value}`
        }
    },
    {
        tagName: "input",
        attrs:{
            placeholder:"your password",
            type:"password"
        },
        event: "change",
        callback: function(event){
            document.cookie=`pass=${Sha256.hash(event.target.value)}`
        }
    },
    // {
    //     tagName: "button",
    //     attrs: {
    //         innerText: "Cookie"
    //     },
    //     event: "click",
    //     callback: function(event){
    //         console.log("hello")
    //         var cookieInfo = document.cookie.split ( "; " ).map ( x =>
    //             Object.assign ( {}, ( arr => { return { [ arr [0] ] : arr [1] } } ) ( x.split ( "=" ) ) )
    //         )
    //         console.log(cookieInfo)
    //     }
    // }
]

formElements.forEach(current =>{
    var elem=document.body.appendChild(document.createElement(current.tagName))
    for (var atr in current.attrs){
        elem[atr]=current.attrs[atr]
    }
    elem.addEventListener(current.event, current.callback)
})
} else{
  document.write(`Hello ${cookieInfo.userName}`)
}
