function binarysearch() {
    var l = 0;
    var r = ARR.length-1;
    var inputval = document.getElementById("texty").value;

    while(l <= r) {
        change(divs[l], ARR[l], "yellow", delay2);
        change(divs[r], ARR[r], "yellow", delay2);
        
        var mid = Math.floor((l+r)/2);
        change(divs[mid], ARR[mid], "red", delay2);
        // console.log(l, mid, r);
        
        if(ARR[mid] == inputval) {
            change(divs[l], ARR[l], "#40E0D0", delay2);
            change(divs[r], ARR[r], "#40E0D0", delay2);
            change(divs[mid], ARR[mid], "green", delay2);
            found(true, mid, inputval);
            return;
        }    
        else if(ARR[mid]<inputval) {
            change(divs[l], ARR[l], "#40E0D0", delay2);
            change(divs[r], ARR[r], "#40E0D0", delay2);
            l = mid+1;
        }
        else {
            change(divs[l], ARR[l], "#40E0D0", delay2);
            change(divs[r], ARR[r], "#40E0D0", delay2);
            r = mid-1;
        }   
        change(divs[mid], ARR[mid], "#40E0D0", delay2);             
    }

    found(false, 0, inputval);
    return ;
}
