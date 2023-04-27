const React = require("react");
const Default = require("./layouts/default")

const New =() => {
    return(
        <Default>
            <h2>Add a new bread</h2>
            <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id= "name" />

            <label htmlFor= "image">Image URL</label>
            <input type= "text" name="image" id= "image" />

            <label>Has Gluten?
                <input type="checkbox" name= "hasGluten" id="hasGluten" /> &nbsp; Has Gluten?
            </label>
            <br></br>
            <input type= "submit"/>
            </form>
        </Default>
    )

}

module.exports= New;