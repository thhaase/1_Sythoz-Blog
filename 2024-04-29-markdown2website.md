# markdown2website

A while ago, I learned about Quarto, was really amazed by it, and instantly wanted to start a personal webpage and blog to try it out. After a while, I realized that downloading an entire program just to create a simple static website is way too overengineered, considering how easy pure HTML code is to write. The simplicity and raw aesthetic of older basic HTML webpages always intrigued me, but I also appreciated the idea of creating webpages easily by just converting markdown files.


One day I was browsing through GitHub and found the blog of GitHub user [casual writer](https://casualwriter.github.io/blog/) who wrote a simple JavaScript translator to do exactly that: use markdown to create HTML. This way everything is converted at the clientdevice in the browser! No need to install extra programs. This was exactly what I wanted, but when trying to modify his code, I realized that it shouldn't be too hard to write a tool like his myself.


The main goal was to keep everything minimalistic and user-friendly. Creating a website from a folder of markdown notes, such as those commonly used in note management programs, like Obsidian or Zettlr, should ideally only require copying one HTML file containing all necessary JavaScript and CSS. In the end, I needed a little more than that, but the principle stayed the same - just copy the source folder and index.html and also create a mediafolder for all the pictures and a startpage.md - thats it.


I did not add automation for tags, etc. like casual writer did with his tool, because of simplicity and the need to stay abstract to use the tool for different purposes. There might be the paradigm to sort blog posts via tags, but I like the idea of a little chaos in your notes/blogcontent to keep the entropy a little higher - most of the time, you learn a lot and it promotes creativity. Also, thinking about sorting only makes sense for a really big amount of notes. For this I need to write some posts first... 😁


#### You can find the Project here:
- [https://github.com/thhaase/markdown2website](https://github.com/thhaase/markdown2website)
