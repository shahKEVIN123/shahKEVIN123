#include<stdio.h>
#include<conio.h>
void main()
{
   int beg,mid,end,n,i,val,a[20];
   clrscr();
   printf("enter the number of element in array:");
   scanf("%d",&n);
   for(i=0;i<n;i++)
     {
	printf("\n enter element:",i+1);
	scanf("%d",&a[i]);
     }
   printf("\n enter element for search:");
   scanf("%d",&val);

   beg=0;
   end=n;

   while(beg<=end)
   {
     mid=(beg+end)/2;
     if(a[mid]==val)
     {
	 printf("\n %d is found at position: %d",val,mid);
	 break;
     }
     else if (a[mid] > val)
	end = mid -1;
     else
       beg = mid + 1;
   }
   if(beg>end)
   printf("not found\n",val);
   getch();
}