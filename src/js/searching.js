function linearsearch()
{
    var inputval=document.getElementById("texty").value;
    var count=0;
    for(var i=0;i<N;++i)
    {
        if(ARR[i]==inputval)
            {
             change(divs[i],ARR[i],"green");
             count=1;
             break;
            }
        change(divs[i],ARR[i],"red");    
        change(divs[i],ARR[i],"#40E0D0");        
    }
    if(count==1)
    {
        setTimeout(function(){
        var x=document.getElementById("array_container2");
        y=document.createElement("div");
        y.textContent="Element "+inputval+" found at index: "+i;
        y.style.color="red";
        y.style.paddingRight="300px";
        x.appendChild(y);
 
        }, delay1);
    }
    if(count==0)
    {
        setTimeout(function(){
            var x=document.getElementById("array_container2");
            y=document.createElement("div");
            y.textContent="Element does not exist!";
            y.style.color="red";
            y.style.paddingRight="300px";
            x.appendChild(y);
            }, delay1);
     
    }
   
}
function binarysearch()
{
    var l=0;
    var r=ARR.length-1;
    var inputval=document.getElementById("texty").value;
    while(l<=r)
    {
        change(divs[l],ARR[l],"yellow");
        change(divs[r],ARR[r],"yellow");
        var mid=Math.floor((l+r)/2);
        change(divs[mid],ARR[mid],"red");
        if(ARR[mid]==inputval)
            {
                change(divs[mid],ARR[mid],"green");
                change(divs[l],ARR[l],"#40E0D0");
                change(divs[r],ARR[r],"#40E0D0");
                return ;
            }    
        else if(ARR[mid]<inputval)
           {
                change(divs[l],ARR[l],"#40E0D0")  
                l=mid+1;
           }
        else
            {
                change(divs[r],ARR[r],"#40E0D0")  
                r=mid-1;
            }
        change(divs[mid],ARR[mid],"#40E0D0")              
    }

    return;
}
