var selector = document.body.appendChild ( document.createElement ( 'input' ) )
selector.type = 'file'
selector.multiple = true
selector.id = 'selectImages'
selector.style.display = 'none'

var label = document.body.appendChild ( document.createElement ( 'label' ) )
label.htmlFor = 'selectImages'
label.innerText = 'Select images'

var promise = function ( imageFile ) {
        return new Promise (function (resolve, reject){
                  var fileReader = new FileReader ()
                  fileReader.readAsDataURL ( imageFile )
                  fileReader.onload = function ( event ) {
                                imageFile.type.split('/')[0]==='image'? resolve (event.target.result):
                                reject("Выбранный файл не является изображением" )

                        }
        })
}


selector.onchange = function ( event ) {
        for ( var file of event.target.files ) {
                promise ( file ).then ( result => {
                        var picture = document.createElement ( "img" )
                        document.body.appendChild( picture )
                        picture.src = result
                        picture.style=`
                          width:300px;
                        `

                })
                .catch ( error => alert ( error ) )
        }
}
