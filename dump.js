 $.ajax({
              url:'http://localhost:3000/api/admin_login',
              method: 'POST',
              contentType: 'application/json',
              data:JSON.stringify({
                     usersername:username,
                     password:password
              }),
              success:function(data){
                if(data.status==200){
                   window.location.href='/admin-home';
                }else{
                    $('#msg').html(`<p class='alert alert-danger' style'text-align:center'>${data.error}</p>`);
                }
              }
          })