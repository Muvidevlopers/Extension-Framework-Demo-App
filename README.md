# MUVI Extension Framework Demo App Source code
A MUVI extension framework extends the existing functionality of MUVI CMS. You can build an extension to add features to MUVI CMS (at backend CMS as well as Frontend store) and extend the partner/merchant experience, or to create unique OTT platform experiences for customers by enhancing them at the TOP of MUVI. You can also pull MUVI CMS data into your extension, platform, or integration via APIs, WebHooks or any third party implementation.

To tailor experiences to their specific needs, partners/customers/developers use MUVI Extension to help build their business, integrate with external services, and add features to their MUVI CMS store.

## Installation / Setup guide

No need to depend on any installation process with the setup which you are going to build and deploy with your development. So don’t worry and just start using MUVI core components into your application to work around with the MUVI environment and take an exact look and feel into your extension framework features via importing core components(Header, Footer, Navigation, etc.) into your development environment from MUVI CMS.

```
git clone https://github.com/Muvidevlopers/Extension-Framework-Demo-App.git
Run the application via VS code editor using Live Server or from your project root path to development server
```

## How to use / Import Common Components
Below are the steps to create and use any core components while building your extension in the MUVI platform.

1. Create one project into your development server and add one index.html file to that directory.
Now add all the latest [VUE](https://cdnjs.com/libraries/vue), [VUE-ROUTER](https://cdnjs.com/libraries/vue-router), [VUEX](https://cdnjs.com/libraries/vuex), [Axios](https://cdnjs.com/libraries/axios) libraries CDN version into ```<script src=""></script>``` tag of index.html file.

2. Now create a VUE application using below code to load your app into browser based execution.
	```js
	var app = new Vue({
    	  	el: "#app",
    	components: {},
		data() {
      		return {},
		},
		methods: {},
	});
	```
3. Now import or load MUVI CMS core components via CDN based URL to give the CMS platform look and feel into your extension.
	```html
	<script type="module">
		import HeaderComponent from 'https://storecms-dev.allthingsott.com/products/layouts/Header.vue.js';
		import FooterComponent from 'https://storecms-dev.allthingsott.com/products/layouts/Footer.vue.js';
		import NavigationComponent from 'https://storecms-dev.allthingsott.com/products/layouts/Leftnav.vue.js';
	</script>
	```
4. Now use those above components in vue app in index.html page like this;
	```html
	<header-component></header-component>
	```

	```html
	<nav class="side-navbar sb-container myContainer">
	    <navigation-component></navigation-component>
	</nav>
	```

	```html
	<footer-component></footer-component>
	```

While using core components into your extension, you will get an exact UI/UX and features to render Header, Footer, Left Navigation menu items into your application and use it to create your own features.

## Run extension or application
Now load your browser based application via URL into your browser and see the output result into your development server via [http://localhost/your-app-directory](http://localhost/your-app-directory) or [http://127.0.0.1:5500](http://127.0.0.1:5500) if you are using VS code editor and start your live server from it.

## How extension / app output looks like after implementing extensions
In this example application, I have implemented a Content Library component and inherited MUVI core components like Header, Footer, Left navigation menu item into separate project and created one component to fetch Content Library with audio and video assets and displayed as per MUVI CMS did.

![muvi-extension-framework-output](https://user-images.githubusercontent.com/107991132/175026624-395b9c8b-117e-4e43-acee-17503456605a.png)
