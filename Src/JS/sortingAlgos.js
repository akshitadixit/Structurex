// <<<<<<< HEAD:sortingAlgos.js
function bubbleSort() {
    delay1 = 0;
    for (var i = 0; i < N-1; i++) {
        for (var j = 0; j < N-i-1; j++) 
        {
            change(divs[j], ARR[j], "yellow");//Color update

            if (ARR[j] > ARR[j+1]) 
            {
                change(divs[j], ARR[j], "red");//Color update
                change(divs[j+1], ARR[j+1], "red");//Color update

                var temp = ARR[j];
                ARR[j] = ARR[j+1];
                ARR[j+1] = temp;

                change(divs[j], ARR[j], "red");//Height update
                change(divs[j+1], ARR[j+1], "red");//Height update
            }
            change(divs[j], ARR[j], "#40E0D0");//Color update
        }
        change(divs[j], ARR[j], "green");//Color update
    }
    change(divs[0], ARR[0], "green");//Color update
}

function insertionSort()
{
    delay1 = 0;

    for(var j = 0; j < N; j++)
    {
        change(divs[j], ARR[j], "yellow");//Color update

        var key = ARR[j];
        var i = j-1;

        while(i >= 0 && ARR[i] > key)
        {
            change(divs[i], ARR[i], "red");//Color update
            change(divs[i+1], ARR[i+1], "red");//Color update

            ARR[i+1] = ARR[i];

            change(divs[i], ARR[i], "red");//Height update
            change(divs[i+1], ARR[i+1], "red");//Height update
    
            change(divs[i], ARR[i], "#40E0D0");//Color update

            if(i == j-1)
            {
                change(divs[i+1], ARR[i+1], "yellow");//Color update
            }
            else
            {
                change(divs[i+1], ARR[i+1], "#40E0D0");//Color update
            }
            --i;
        }
        ARR[i+1] = key;

        for(var t = 0; t < j; t++)
        {
            change(divs[t], ARR[t], "green");//Color update
        }
    }
    change(divs[j-1], ARR[j-1], "green");//Color update
}

function selectionSort()
{
    delay1 = 0;

    for(var i = 0; i < N-1; i++)
    {
        change(divs[i], ARR[i], "red");//Color update

        index_min = i;

        for(var j = i+1; j < N; j++)
        {
            change(divs[j], ARR[j], "yellow");//Color update

            if(ARR[j] < ARR[index_min])
            {
                if(index_min != i)
                {
                    change(divs[index_min], ARR[index_min], "#40E0D0");//Color update
                }
                index_min = j;
                change(divs[index_min], ARR[index_min], "red");//Color update
            }
            else
            {
                change(divs[j], ARR[j], "#40E0D0");//Color update
            }
        }
        
        if(index_min != i)
        {
            var temp = ARR[index_min];
            ARR[index_min] = ARR[i];
            ARR[i] = temp;

            change(divs[index_min], ARR[index_min], "red");//Height update
            change(divs[i], ARR[i], "red");//Height update
            change(divs[index_min], ARR[index_min], "#40E0D0");//Color update
        }
        change(divs[i], ARR[i], "green");//Color update
    }
    change(divs[i], ARR[i], "green");//Color update

}

function Merge()
{
    delay1 = 0;

    merge_partition(0, N-1);
}

function merge_sort(start, mid,end)
{
    var p = start, q = mid+1;

    var Arr = [], k = 0;

    for(var i = start; i <= end; i++)
    {
        if(p > mid)
        {
            Arr[k++] = ARR[q++];
            change(divs[q-1], ARR[q-1], "red");//Color update
        }
        else if(q > end)
        {
            Arr[k++] = ARR[p++];
            change(divs[p-1], ARR[p-1], "red");//Color update
        }
        else if(ARR[p] < ARR[q])
        {
            Arr[k++] = ARR[p++];
            change(divs[p-1], ARR[p-1], "red");//Color update
        }
        else
        {
            Arr[k++] = ARR[q++];
            change(divs[q-1], ARR[q-1], "red");//Color update
        }
    }

    for(var t = 0; t < k; t++)
    {
        ARR[start++] = Arr[t];
        change(divs[start-1], ARR[start-1], "green");//Color update
    }
}

function merge_partition(start, end)
{
    if(start < end)
    {
        var mid = Math.floor((start + end) / 2);
        change(divs[mid], ARR[mid], "yellow");//Color update

        merge_partition(start, mid);
        merge_partition(mid+1, end);

        merge_sort(start, mid, end);
    }
}

function Heap()
{
    delay1 = 0;

    heap_sort();
}

function swap(i, j)
{
    change(divs[i], ARR[i], "red");//Color update
    change(divs[j], ARR[j], "red");//Color update

    var temp = ARR[i];
    ARR[i] = ARR[j];
    ARR[j] = temp;

    change(divs[i], ARR[i], "red");//Height update
    change(divs[j], ARR[j], "red");//Height update

    change(divs[i], ARR[i], "#40E0D0");//Color update
    change(divs[j], ARR[j], "#40E0D0");//Color update
}

function max_heapify(n, i)
{
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if(l < n && ARR[l] > ARR[largest])
    {
        if(largest != i)
        {
            change(divs[largest], ARR[largest], "#40E0D0");//Color update
        }

        largest = l;

        change(divs[largest], ARR[largest], "red");//Color update
    }

    if(r < n && ARR[r] > ARR[largest])
    {
        if(largest != i)
        {
            change(divs[largest], ARR[largest], "#40E0D0");//Color update
        }

        largest = r;

        change(divs[largest], ARR[largest], "red");//Color update
    }

    if(largest != i)
    {
        swap(i, largest);

        max_heapify(n, largest);
    }
}

function heap_sort()
{
    for(var i = Math.floor(N / 2) - 1; i >= 0; i--)
    {
        max_heapify(N, i);
    }

    for(var i = N-1; i > 0; i--)
    {
        swap(0, i);
        change(divs[i], ARR[i], "green");//Color update
        change(divs[i], ARR[i], "yellow");//Color update

        max_heapify(i, 0);

        change(divs[i], ARR[i], "#40E0D0");//Color update
        change(divs[i], ARR[i], "green");//Color update
    }
    change(divs[i], ARR[i], "green");//Color update
}

function Quick()
{
    delay1 = 0;

    quick_sort(0, N-1);
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = ARR[start] ;//make the first element as pivot element.
    change(divs[start], ARR[start], "yellow");//Color update

        for(var j = start+1; j <= end ; j++)
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (ARR[j] < piv)
            {
                change(divs[j], ARR[j], "yellow");//Color update

                change(divs[i], ARR[i], "red");//Color update
                change(divs[j], ARR[j], "red");//Color update

                var temp = ARR[i];
                ARR[i] = ARR[j];
                ARR[j] = temp;

                change(divs[i], ARR[i], "red");//Height update
                change(divs[j], ARR[j], "red");//Height update

                change(divs[i], ARR[i], "#40E0D0");//Height update
                change(divs[j], ARR[j], "#40E0D0");//Height update

                ++i;
            }
    }

    change(divs[start], ARR[start], "red");//Color update
    change(divs[i-1], ARR[i-1], "red");//Color update
    
    var temp = ARR[start];//put the pivot element in its proper place.
    ARR[start] = ARR[i-1];
    ARR[i-1] = temp;

    change(divs[start], ARR[start], "red");//Height update
    change(divs[i-1], ARR[i-1], "red");//Height update

    for(var t = start; t <= i; t++)
    {
        change(divs[t], ARR[t], "green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort(start, end)
{
    if(start < end)
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end) ;     
        quick_sort(start, piv_pos - 1);//sorts the left side of pivot.
        quick_sort(piv_pos + 1, end) ;//sorts the right side of pivot.
    }
}
// =======
// function bubbleSort() {
//     delay1 = 0;
//     for (var i = 0; i < N - 1; i++) {
//         for (var j = 0; j < N - i - 1; j++) {
//             change(divs[j], ARR[j], "yellow");//Color update

//             if (ARR[j] > ARR[j + 1]) {
//                 change(divs[j], ARR[j], "red");//Color update
//                 change(divs[j + 1], ARR[j + 1], "red");//Color update

//                 var temp = ARR[j];
//                 ARR[j] = ARR[j + 1];
//                 ARR[j + 1] = temp;

//                 change(divs[j], ARR[j], "red");//Height update
//                 change(divs[j + 1], ARR[j + 1], "red");//Height update
//             }
//             change(divs[j], ARR[j], "#40E0D0");//Color updat
//         }
//         change(divs[j], ARR[j], "green");//Color update
//     }
//     change(divs[0], ARR[0], "green");//Color update
// }

// function insertionSort()
// {
//     delay1=0;

//     for(var j=0;j<N;j++)
//     {
//         change(divs[j],ARR[j],"yellow");//Color update

//         var key= ARR[j];
//         var i=j-1;
//         while(i>=0 && ARR[i]>key)
//         {
//             change(divs[i],ARR[i],"red");//Color update
//             change(divs[i+1],ARR[i+1],"red");//Color update

//             ARR[i+1]=ARR[i];

//             change(divs[i],ARR[i],"red");//Height update
//             change(divs[i+1],ARR[i+1],"red");//Height update
    
//             change(divs[i],ARR[i],"#40E0D0");//Color update
//             if(i==(j-1))
//             {
//                 change(divs[i+1],ARR[i+1],"yellow");//Color update
//             }
//             else
//             {
//                 change(divs[i+1],ARR[i+1],"#40E0D0");//Color update
//             }
//             i-=1;
//         }
//         ARR[i+1]=key;

//         for(var t=0;t<j;t++)
//         {
//             change(divs[t],ARR[t],"green");//Color update
//         }
//     }
//     change(divs[j-1],ARR[j-1],"green");//Color update
// }

// function selectionSort()
// {
//     delay1=0;

//     for(var i=0;i<N-1;i++)
//     {
//         change(divs[i],ARR[i],"red");//Color update

//         index_min=i;

//         for(var j=i+1;j<N;j++)
//         {
//             change(divs[j],ARR[j],"yellow");//Color update

//             if(ARR[j]<ARR[index_min])
//             {
//                 if(index_min!=i)
//                 {
//                     change(divs[index_min],ARR[index_min],"#40E0D0");//Color update
//                 }
//                 index_min=j;
//                 change(divs[index_min],ARR[index_min],"red");//Color update
//             }
//             else
//             {
//                 change(divs[j],ARR[j],"#40E0D0");//Color update
//             }
//         }
        
//         if(index_min!=i)
//         {
//             var temp=ARR[index_min];
//             ARR[index_min]=ARR[i];
//             ARR[i]=temp;

//             change(divs[index_min],ARR[index_min],"red");//Height update
//             change(divs[i],ARR[i],"red");//Height update
//             change(divs[index_min],ARR[index_min],"#40E0D0");//Color update
//         }
//         change(divs[i],ARR[i],"green");//Color update
//     }
//     change(divs[i],ARR[i],"green");//Color update

// }

// function Merge()
// {
//     delay1=0;

//     merge_partition(0,N-1);

// }

// function merge_sort(start,mid,end)
// {
//     var p=start,q=mid+1;

//     var Arr=[],k=0;

//     for(var i=start; i<=end; i++)
//     {
//         if(p>mid)
//         {
//             Arr[k++]=ARR[q++];
//             change(divs[q-1],ARR[q-1],"red");//Color update
//         }
//         else if(q>end)
//         {
//             Arr[k++]=ARR[p++];
//             change(divs[p-1],ARR[p-1],"red");//Color update
//         }
//         else if(ARR[p]<ARR[q])
//         {
//             Arr[k++]=ARR[p++];
//             change(divs[p-1],ARR[p-1],"red");//Color update
//         }
//         else
//         {
//             Arr[k++]=ARR[q++];
//             change(divs[q-1],ARR[q-1],"red");//Color update
//         }
//     }

//     for(var t=0;t<k;t++)
//     {
//         ARR[start++]=Arr[t];
//         change(divs[start-1],ARR[start-1],"green");//Color update
//     }
// }

// function merge_partition(start,end)
// {
//     if(start < end)
//     {
//         var mid=Math.floor((start + end) / 2);
//         change(divs[mid],ARR[mid],"yellow");//Color update

//         merge_partition(start,mid);
//         merge_partition(mid+1,end);

//         merge_sort(start,mid,end);
//     }
// }

// function Heap()
// {
//     delay1=0;

//     heap_sort();
    
// }

// function swap(i,j)
// {
//     change(divs[i],ARR[i],"red");//Color update
//     change(divs[j],ARR[j],"red");//Color update

//     var temp=ARR[i];
//     ARR[i]=ARR[j];
//     ARR[j]=temp;

//     change(divs[i],ARR[i],"red");//Height update
//     change(divs[j],ARR[j],"red");//Height update

//     change(divs[i],ARR[i],"#40E0D0");//Color update
//     change(divs[j],ARR[j],"#40E0D0");//Color update
// }

// function max_heapify(n,i)
// {
//     var largest=i;
//     var l=2*i+1;
//     var r=2*i+2;

//     if(l<n && ARR[l]>ARR[largest])
//     {
//         if(largest!=i)
//         {
//             change(divs[largest],ARR[largest],"#40E0D0");//Color update
//         }

//         largest=l;

//         change(divs[largest],ARR[largest],"red");//Color update
//     }

//     if(r<n && ARR[r]>ARR[largest])
//     {
//         if(largest!=i)
//         {
//             change(divs[largest],ARR[largest],"#40E0D0");//Color update
//         }

//         largest=r;

//         change(divs[largest],ARR[largest],"red");//Color update
//     }

//     if(largest!=i)
//     {
//         swap(i,largest);

//         max_heapify(n,largest);
//     }
// }

// function heap_sort()
// {
//     for(var i=Math.floor(N/2)-1;i>=0;i--)
//     {
//         max_heapify(N,i);
//     }

//     for(var i=N-1;i>0;i--)
//     {
//         swap(0,i);
//         change(divs[i],ARR[i],"green");//Color update
//         change(divs[i],ARR[i],"yellow");//Color update

//         max_heapify(i,0);

//         change(divs[i],ARR[i],"#40E0D0");//Color update
//         change(divs[i],ARR[i],"green");//Color update
//     }
//     change(divs[i],ARR[i],"green");//Color update
// }

// function Quick()
// {
//     delay1=0;

//     quick_sort(0, N - 1);
    
// }

// function quick_partition (start, end)
// {
//     var i = start + 1;
//     var piv = ARR[start] ;//make the first element as pivot element.
//     change(divs[start],ARR[start],"yellow");//Color update

//         for(var j =start + 1; j <= end ; j++ )
//         {
//             //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
//             if (ARR[ j ] < piv)
//             {
//                 change(divs[j],ARR[j],"yellow");//Color update

//                 change(divs[i],ARR[i],"red");//Color update
//                 change(divs[j],ARR[j],"red");//Color update

//                 var temp=ARR[i];
//                 ARR[i]=ARR[j];
//                 ARR[j]=temp;

//                 change(divs[i],ARR[i],"red");//Height update
//                 change(divs[j],ARR[j],"red");//Height update

//                 change(divs[i],ARR[i],"#40E0D0");//Height update
//                 change(divs[j],ARR[j],"#40E0D0");//Height update

//                 i += 1;
//             }
//     }
//     change(divs[start],ARR[start],"red");//Color update
//     change(divs[i-1],ARR[i-1],"red");//Color update
    
//     var temp=ARR[start];//put the pivot element in its proper place.
//     ARR[start]=ARR[i-1];
//     ARR[i-1]=temp;

//     change(divs[start],ARR[start],"red");//Height update
//     change(divs[i-1],ARR[i-1],"red");//Height update

//     for(var t=start;t<=i;t++)
//     {
//         change(divs[t],ARR[t],"green");//Color update
//     }

//     return i-1;//return the position of the pivot
// }

// function quick_sort (start, end )
// {
//     if( start < end )
//     {
//         //stores the position of pivot element
//         var piv_pos = quick_partition (start, end ) ;     
//         quick_sort (start, piv_pos -1);//sorts the left side of pivot.
//         quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
//     }
//  }
// >>>>>>> upstream/main:Src/JS/sortingAlgos.js
