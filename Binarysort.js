<script>
// Javascript Program implementing
// binary insertion sort

function binarySearch(a, item, low, high)
{

	if (high <= low)
		return (item > a[low]) ?
					(low + 1) : low;

	mid = Math.floor((low + high) / 2);

	if(item == a[mid])
		return mid + 1;

	if(item > a[mid])
		return binarySearch(a, item,
							mid + 1, high);
		
	return binarySearch(a, item, low,
							mid - 1);
}

function sort(array)
{
	for (let i = 1; i < array.length; i++)
		{
			let j = i - 1;
			let x = array[i];

			// Find location to insert
			// using binary search
			let loc = Math.abs(
				binarySearch(array, x,
									0, j));

			// Shifting array to one
			// location right
			
			while (j >= loc)
			{
				array[j + 1] = array[j];
				j--;
			}

			// Placing element at its
			// correct location
			array[j+1] = x;
		}
}

// Driver Code
let arr=[ 37, 23, 0, 17, 12, 72,
							31, 46, 100, 88, 54];
sort(arr);

for (let i = 0; i < arr.length; i++)
	document.write(arr[i] + " ");


// This code is contributed by unknown2108
</script>
// C program for implementation of
// binary insertion sort
#include <stdio.h>

// A binary search based function
// to find the position
// where item should be inserted
// in a[low..high]
int binarySearch(int a[], int item,
				int low, int high)
{
	if (high <= low)
		return (item > a[low]) ?
				(low + 1) : low;

	int mid = (low + high) / 2;

	if (item == a[mid])
		return mid + 1;

	if (item > a[mid])
		return binarySearch(a, item,
							mid + 1, high);
	return binarySearch(a, item, low,
						mid - 1);
}

// Function to sort an array a[] of size 'n'
void insertionSort(int a[], int n)
{
	int i, loc, j, k, selected;

	for (i = 1; i < n; ++i)
	{
		j = i - 1;
		selected = a[i];

		// find location where selected should be inserted
		loc = binarySearch(a, selected, 0, j);

		// Move all elements after location to create space
		while (j >= loc)
		{
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = selected;
	}
}

// Driver Code
int main()
{
	int a[]
		= { 37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54 };
	int n = sizeof(a) / sizeof(a[0]), i;

	insertionSort(a, n);

	printf("Sorted array: \n");
	for (i = 0; i < n; i++)
		printf("%d ", a[i]);

	r// C program for implementation of
// binary insertion sort
#include <stdio.h>

// A binary search based function
// to find the position
// where item should be inserted
// in a[low..high]
int binarySearch(int a[], int item,
				int low, int high)
{
	if (high <= low)
		return (item > a[low]) ?
				(low + 1) : low;

	int mid = (low + high) / 2;

	if (item == a[mid])
		return mid + 1;

	if (item > a[mid])
		return binarySearch(a, item,
							mid + 1, high);
	return binarySearch(a, item, low,
						mid - 1);
}

// Function to sort an array a[] of size 'n'
void insertionSort(int a[], int n)
{
	int i, loc, j, k, selected;

	for (i = 1; i < n; ++i)
	{
		j = i - 1;
		selected = a[i];

		// find location where selected should be inseretd
		loc = binarySearch(a, selected, 0, j);

		// Move all elements after location to create space
		while (j >= loc)
		{
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = selected;
	}
}

// Driver Code
int main()
{
	int a[]
		= { 37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54 };
	int n = sizeof(a) / sizeof(a[0]), i;

	insertionSort(a, n);

	printf("Sorted array: \n");
	for (i = 0; i < n; i++)
		printf("%d ", a[i]);

	// C program for implementation of
// binary insertion sort
#include <stdio.h>

// A binary search based function
// to find the position
// where item should be inserted
// in a[low..high]
int binarySearch(int a[], int item,
				int low, int high)
{
	if (high <= low)
		return (item > a[low]) ?
				(low + 1) : low;

	int mid = (low + high) / 2;

	if (item == a[mid])
		return mid + 1;

	if (item > a[mid])
		return binarySearch(a, item,
							mid + 1, high);
	return binarySearch(a, item, low,
						mid - 1);
}

// Function to sort an array a[] of size 'n'
void insertionSort(int a[], int n)
{
	int i, loc, j, k, selected;

	for (i = 1; i < n; ++i)
	{
		j = i - 1;
		selected = a[i];

		// find location where selected should be inseretd
		loc = binarySearch(a, selected, 0, j);

		// Move all elements after location to create space
		while (j >= loc)
		{
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = selected;
	}
}

// Driver Code
int main()
{
	int a[]
		= { 37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54 };
	int n = sizeof(a) / sizeof(a[0]), i;

	insertionSort(a, n);

	printf("Sorted array: \n");
	for (i = 0; i < n; i++)
		printf("%d ", a[i]);

// C program for implementation of
// binary insertion sort
#include <stdio.h>

// A binary search based function
// to find the position
// where item should be inserted
// in a[low..high]
int binarySearch(int a[], int item,
				int low, int high)
{
	if (high <= low)
		return (item > a[low]) ?
				(low + 1) : low;

	int mid = (low + high) / 2;

	if (item == a[mid])
		return mid + 1;

	if (item > a[mid])
		return binarySearch(a, item,
							mid + 1, high);
	return binarySearch(a, item, low,
						mid - 1);
}

// Function to sort an array a[] of size 'n'
void insertionSort(int a[], int n)
{
	int i, loc, j, k, selected;

	for (i = 1; i < n; ++i)
	{
		j = i - 1;
		selected = a[i];

		// find location where selected should be inserted
		loc = binarySearch(a, selected, 0, j);

		// Move all elements after location to create space
		while (j >= loc)
		{
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = selected;
	}
}

// Driver Code
int main()
{
	int a[]
		= { 37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54 };
	int n = sizeof(a) / sizeof(a[0]), i;

	insertionSort(a, n);

	printf("Sorted array: \n");
	for (i = 0; i < n; i++)
		printf("%d ", a[i]);
// C program for implementation of
// binary insertion sort
#include <stdio.h>

// A binary search based function
// to find the position
// where item should be inserted
// in a[low..high]
int binarySearch(int a[], int item,
				int low, int high)
{
	if (high <= low)
		return (item > a[low]) ?
				(low + 1) : low;

	int mid = (low + high) / 2;

	if (item == a[mid])
		return mid + 1;

	if (item > a[mid])
		return binarySearch(a, item,
							mid + 1, high);
	return binarySearch(a, item, low,
						mid - 1);
}

// Function to sort an array a[] of size 'n'
void insertionSort(int a[], int n)
{
	int i, loc, j, k, selected;

	for (i = 1; i < n; ++i)
	{
		j = i - 1;
		selected = a[i];

		// find location where selected should be inseretd
		loc = binarySearch(a, selected, 0, j);

		// Move all elements after location to create space
		while (j >= loc)
		{
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = selected;
	}
}

// Driver Code
int main()
{
	int a[]
		= { 37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54 };
	int n = sizeof(a) / sizeof(a[0]), i;

	insertionSort(a, n);

	printf("Sorted array: \n");
	for (i = 0; i < n; i++)
		printf("%d ", a[i]);// C program for implementation of
// binary insertion sort
#include <stdio.h>

// A binary search based function
// to find the position
// where item should be inserted
// in a[low..high]
int binarySearch(int a[], int item,
				int low, int high)
{
	if (high <= low)
		return (item > a[low]) ?
				(low + 1) : low;

	int mid = (low + high) / 2;

	if (item == a[mid])
		return mid + 1;

	if (item > a[mid])
		return binarySearch(a, item,
							mid + 1, high);
	return binarySearch(a, item, low,
						mid - 1);
}

// Function to sort an array a[] of size 'n'
void insertionSort(int a[], int n)
{
	int i, loc, j, k, selected;

	for (i = 1; i < n; ++i)
	{
		j = i - 1;
		selected = a[i];

		// find location where selected should be inseretd
		loc = binarySearch(a, selected, 0, j);

		// Move all elements after location to create space
		while (j >= loc)
		{
			a[j + 1] = a[j];
			j--;
		}
		a[j + 1] = selected;
	}
}

// Driver Code
int main()
{
	int a[]
		= { 37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54 };
	int n = sizeof(a) / sizeof(a[0]), i;

	insertionSort(a, n);

	printf("Sorted array: \n");
	for (i = 0; i < n; i++)
		printf("%d ", a[i])
