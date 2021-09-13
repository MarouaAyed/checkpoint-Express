import Express from "express"; //nous utilisont cette methode lorsque on ajouter  	"type": "module" dans package.json
const app = Express();
const PORT = 3000;

app.use((req, res, next) => {
	var date = new Date();
	if (
		date.getDate() == 7 ||
		date.getDate() == 6 ||
		date.getHours() < 9 ||
		date.getHours() > 17
	) {
		res
			.status(403)
			.end(
				"we are only available in working time (Monday to Friday, from 9 to 17"
			);
	} else {
		return next();
	}
});
app.use(Express.static("public"));

app.listen(PORT, () => console.log("listenon port " + PORT));
//app.get(path, middleware, callback)
