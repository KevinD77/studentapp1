export default function StudentForm(){

    return(
        
        <>
            <h3></h3>
            <form>

                <label for="studentname">Student Name: new change here!</label><br/>
                <input type="text" id="studentname" name="studentname"/><br/>
                <label for="studentemail">Student Email:</label><br/>
                <input type="email" id="studentemail" name="studentemail"/><br/>
                <label for="phonenumber">Phone Number:</label><br/>
                <input type="phonenumber" id="phonenumber" name="phonenumber"/><br/><br/>
                <input type="submit" value="Submit"></input>

                    
            </form>

        </>


    );

}