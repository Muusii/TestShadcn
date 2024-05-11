import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

function List(){
    return(
        <Card>
         <CardHeader>
          <CardTitle>ToDo List</CardTitle>
            <CardDescription></CardDescription>
         </CardHeader>
            <CardContent>
             <p>Edit tasks</p>
            </CardContent>
            <CardContent>
             <p>Delete tasks</p>
            </CardContent>
            <CardContent>
             <p>Mark complete tasks</p>
            </CardContent>
          <CardFooter>
           <Button>Save Changes</Button>
          </CardFooter>
        </Card>

    );
}
export default List