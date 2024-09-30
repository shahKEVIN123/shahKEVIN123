#include<stdio.h>
#include<conio.h>
void main()
{
  int a[5],j,temp,n,i;
  clrscr();
  printf("enter the number of element:");
  scanf("%d",&n);
  for(i=0;i<n;i++)
  {
    printf("enter element %d:",i+1);
    scanf("%d",&a[i]);
  }
  printf("unstoted list is:\n");
  for(i=0;i<n;i++)
     printf("%d\t",a[i]);
  printf("\n");
  for(i=0;i<n;i++)
  {
     for(j=0;j<n-1;j++)
     {
       if(a[j] > a[j+1])
       {
	 temp=a[j];
	 a[j]=a[j+1];
	 a[j+1]=temp;
       }
     }
  }
  printf("sorted array:\n");
  for(i=0;i<n;i++)
    printf("%d\t",a[i]);

  getch();
}