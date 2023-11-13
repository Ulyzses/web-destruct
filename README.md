# Web Destruct

This is my submission for CSI's App Process 2324A Mini-Task #2. It is a prototype for a browser extension which converts half the anchor `<a>` tags on your page into self-destruct buttons.

## Background

Have you ever wanted to make your browser unusable? Imagine you're just browsing then you click something then, boom!, your web page is gone.

If you have, well then you're in luck! Inspired by Dr. Doofenshmirtz's self-destruct button, I present to you: the **Web Destructinator**.

The **Web Destructinator** is a browser extension which you can install on your browser and convert one in every three clickable links in the page to a self-destruct button. Clicking this will clear your entire screen and, if you're lucky, plays a little video for you.

## Features

- One in three buttons in a web page is now a self-destruct button
- Idk what else to tell you man it gives you anxiety and frustrates you

## Pros and Benefits

- Every mouse click you make is a thrill
- Kung gusto mong tumakas sa reqs mag-screenrecord ka ng sarili mo browsing UVLe tas kunwari may bug kaya lagi siyang nagka-crash give the UVLe maintainers a headache tryna debug it fr

## Probable Cons, Bugs, Threats of Innovation Use

- Walang cons this innovation is perfect
- Possible Bugs: smth smth Content Security Policy directives for some websites
- Threats of Innovation Use: See under [Pros and Benefits](#pros-and-benefits)

## Compatibility

I cannot guarantee that this extension will work on all sites. Further, I cannot guarantee that this extension will work on your browser. It was developed and tested to be somewhat functional on the following browsers:

- Opera GX 102
- Microsoft Edge 119

If you've installed ths extension and it works for you, _please open a pull request to edit this README to add or edit information regarding your browser._

## Installation

Since this is still a prototype, it is not yet uploaded to any extension store. So, please do the following steps to install.

### Step 1. Get a local copy.

There are two ways to do this:

- Download the repository as a ZIP file and then extract in your machine.

- Use git clone (recommended):

```
$ git clone https://github.com/ulyzses/web-destructinator
```

### Step 2. Go to your browser's extension page.

You may visit the following URIs in your browser's address bar to go to the extension page:

- Google Chrome: `chrome://extensions`
- Microsoft Edge: `edge://extensions`
- Opera: `opera://extensions`
- Firefox: `about:addons`

Disclaimer: I have absolutely no idea if this works on Firefox.

### Step 3. Activate Developer Mode.

In the Extensions page of your browser, you should see a Developer mode toggle, normally on the top-right corner of the page. Enable it to allow you to load unpacked extensions.

### Step 4. Click "Load Unpacked" and select the folder where you extracted the repository.

If you used git clone, the folder should be named `web-destruct`. Once you've finished this step, you should see the extension in your browser's extension page. This means you've successfully installed the extension.

## Usage

Once installed, the extension should automatically be enabled on newly loaded and refreshed tabs.
