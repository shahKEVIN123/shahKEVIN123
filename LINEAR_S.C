/*write a c program to impliment linear search.*/
#include<stdio.h>
#include<conio.h>
void main()
{
  int n,a[10],i,val,pos=-1;
  clrscr();
  printf("Enter The Element in the array:");
  scanf("%d",&n);
  printf("\n enter element:");
  for (i=0;i<n;i++)
    {
      printf("\n a[%d]=",i);
      scanf("%d",&a[i]);
    }
  printf("\n enter element for search ::");
  scanf("%d",&val);
  for(i=0;i<n;i++)
    {
      if(a[i]==val)
	{
	  pos=i;
	  break;
	}
    }
       if(pos==-1)
	{
	  printf("search unsuccessful");
	}
	else
	 {
	  printf("search successful");
	 }
    getch();
}