

function getjson(){


        var http_request = new XMLHttpRequest();
        http_request.onreadystatechange = function(){

            if (http_request.readyState == 4  ){
                // Javascript function JSON.parse to parse JSON data
                var jsonObj = JSON.parse(http_request.responseText);

                // jsonObj variable now contains the data structure and can
                // be accessed as jsonObj.name and jsonObj.country.

                for(i=0;i<jsonObj.length;i++)
                {
                    var token = jsonObj[i].token;
                    var cabin = jsonObj[i].cabin;
                    var status = jsonObj[i].status;

                    for(var i=1;i<8;i++)
                    {
                        document.getElementById("token"+i).innerHTML="";
                    }
                    if(status === "O")
                        continue;
                    /*else if(status === "G")
                    {
                        $("#table_data").append("<tr> <td class=\"\" > "+token+"  </td>"+
                        "<td class=\"\" >  </td>"+
                        "<td class=\"\" >Please Wait for your turn</td>"+
                        "</tr>");
                    }*/
                    else if(status === "W")
                    {
                        /*$("#table_data").append("<tr> <td class=\"warning\" > "+token+"  </td>"+
                            "<td class=\"warning\" >"+cabin+"</td>"+
                            "<td class=\"warning\" > Go inside the cabin  </td>"+
                            "</tr>");*/
                        //$("#token"+cabin).append(token);

                        document.getElementById("token3").innerHTML = token;
                    }
                    else if(status === "A")
                    {
                        /*$("#table_data").append("<tr> <td class=\"success\" > "+token+"  </td>"+
                            "<td class=\"success\" >"+cabin+" </td>"+
                            "<td class=\"success\" > You are being Attended </td>"+
                            "</tr>");*/
                        //$("#token"+cabin).append(token);
                        document.getElementById("token2").innerHTML = token;
                    }
                    else
                    {}
                }
                //document.getElementById("page").innerHTML=document.getElementById("page").innerHTML+"</table>";
            }
        }
        http_request.open("GET", "http://"+location.hostname+":"+location.port+"/search", true);
        http_request.send();

    };
setInterval(getjson,1000);