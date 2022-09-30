    const form = new FormData()
    form.append('name', document.getElementById('1').value)
    form.append('age', document.getElementById('2').value)
    form.append('job', document.getElementById('3').value)
    form.append('blood', document.getElementById('4').value)

    console.log(...form)
    //==============Finally send the data===========
    let url = '/abc'
    fetch(url, {
       method: 'post',
       body: form,
    })
       .then(response => { return response.text() })
       .then(data => { console.log(data) })
       .catch(err => { console.e 
                      
                      
//doctype html
//- html(lang="en")
//-     head
//-         meta(charset="UTF-8")
//-         meta(http-equiv="X-UA-Compatible" content="IE=edge")
//-         meta(name="viewport" content="width=device-width, initial-scale=1.0")
//-         title Document
//-     body 

//-         h1 I got the server
//-         br
//-         input(type="text" placeholder='Name' id='1')
//-         input(type="text" placeholder='Age' id='2')
//-         input(type="text" placeholder='Job' id='3')
//-         input(type="text" placeholder='Blood' id='4')
//-         button(onclick='save()') SAVE 
