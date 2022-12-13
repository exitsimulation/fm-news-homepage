# Frontend Mentor - News Homepage
## Solution with Next.js 13, Tailwind CSS and Typescript

I built this solution to the [Frontend Mentor News Homepage](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl) challenge with Next.js 13, Tailwind CSS and Typescript.

For the mobile version (breakpoint of 768px width) I implemented a top bar that is `sticky` and a CSS only burger menu.

I would like to find a more elegant way of scaling the Footer flex containers based on the image height.

I struggled with passing the state of the menu being open or closed between the different components because of ``useState()`` only being accessible in Next.js client components. For now I am using `"use client"` in `page.tsx`  as a solution, however, I would like to find a better way.