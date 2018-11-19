function LibraryBook(authorName,bookName,bookYear){
    var title="Робинзон Крузо"||bookName
    var year=2007||bookYear
    var author="Даниель Дефо"||authorName
    var readerName=null
    var readerData=null

    function  giveTheBook(client){
        readerName=client
        readerData=new Date()
    }

    this.getBookInfo=function(){
        var inf=readerData?"Книга выдана":"Книга в наличии"
        console.log(`${inf}`)
    }

    this.getTheBook=function (client){
      if( readerName)  {
           return "Книга выдана"
       }  else{
        giveTheBook(client)
        return
        console.log(readerData)
        console.log(readerName)
       }
    }


    this.returnBook=function(){
        readerData=null
        readerName=null

    }
}

var newBook= new LibraryBook("Ivan Ivanovich","Adventures",2018)
