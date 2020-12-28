function bubbleSort() {
    delay1 = 0;
    for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - i - 1; j++) {
            change(divs[j], ARR[j], "yellow");//Color update

            if (ARR[j] > ARR[j + 1]) {
                change(divs[j], ARR[j], "red");//Color update
                change(divs[j + 1], ARR[j + 1], "red");//Color update

                var temp = ARR[j];
                ARR[j] = ARR[j + 1];
                ARR[j + 1] = temp;

                change(divs[j], ARR[j], "red");//Height update
                change(divs[j + 1], ARR[j + 1], "red");//Height update
            }
            change(divs[j], ARR[j], "#40E0D0");//Color updat
        }
        change(divs[j], ARR[j], "green");//Color update
    }
    change(divs[0], ARR[0], "green");//Color update
}

function insertionSort()
{
    delay1=0;

    for(var j=0;j<N;j++)
    {
        change(divs[j],ARR[j],"yellow");//Color update

        var key= ARR[j];
        var i=j-1;
        while(i>=0 && ARR[i]>key)
        {
            change(divs[i],ARR[i],"red");//Color update
            change(divs[i+1],ARR[i+1],"red");//Color update

            ARR[i+1]=ARR[i];

            change(divs[i],ARR[i],"red");//Height update
            change(divs[i+1],ARR[i+1],"red");//Height update
    
            change(divs[i],ARR[i],"blue");//Color update
            if(i==(j-1))
            {
                change(divs[i+1],ARR[i+1],"yellow");//Color update
            }
            else
            {
                change(divs[i+1],ARR[i+1],"blue");//Color update
            }
            i-=1;
        }
        ARR[i+1]=key;

        for(var t=0;t<j;t++)
        {
            change(divs[t],ARR[t],"green");//Color update
        }
    }
    change(divs[j-1],ARR[j-1],"green");//Color update
}