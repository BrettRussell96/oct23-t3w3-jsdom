const themes = {
	light: {
		background: "white",
		color: "darkgrey"
	},
	dark: {
		background: "darkgrey",
		color: "#ffffff"
	}
};

function changeCssTheme(themeName){
	// themes[themeName].variable
	for (const variable in themes[themeName]){
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
		console.log("Updated CSS variable --" + variable);

	}
}


<<<<<<< HEAD

function setThemeToDark(){
	changeCssTheme("dark");
}
=======
function setThemeToDark(){
	changeCssTheme("dark");
}

>>>>>>> 8af02c6908d4b4eaad6ab3be41333e389cf5a690
function setThemeToLight(){
	changeCssTheme("light");
}

function toggleCssTheme(){
	let currentBackgroundColour = getComputedStyle(document.documentElement).getPropertyValue("--background");
<<<<<<< HEAD
	
	// changeCssTheme(currentBackgroundColour == "white" ? "dark" : "light");
    // changeCssTheme("dark");
    // changeCssTheme("light");
	
	console.log("current background colour is: " + currentBackgroundColour);

	if (currentBackgroundColour == "white"){
		// we are in light theme, set it to dark
		changeCssTheme("dark");
	} else {
		changeCssTheme("light");
		// we are in dark theme, change to light
=======


	// changeCssTheme(currentBackgroundColour == "white" ? "dark" : "light");
	// changeCssTheme("dark");
	// changeCssTheme("light");

	console.log("Current background colour is: " + currentBackgroundColour);

	if (currentBackgroundColour == "white"){
		// we are already in light theme, set it to dark 
		changeCssTheme("dark");
		// setThemeToDark();
	} else {
		// we are in dark theme, set it to light
		changeCssTheme("light");
>>>>>>> 8af02c6908d4b4eaad6ab3be41333e389cf5a690
	}
}


<<<<<<< HEAD






=======
>>>>>>> 8af02c6908d4b4eaad6ab3be41333e389cf5a690
changeCssTheme("dark");




console.log('Hello from Alex\'s code');
console.log("Hello from Alex's code");

