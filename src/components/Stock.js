import data from '../data'
import { useParams } from 'react-router-dom';
function Stock(props){
    const params = useParams();
    console.log(params.symbol);
    console.log(props);
        if(params.symbol === 'AAPL'){
            console.log(data);
            return <div> 
                <h1>hello</h1>

            </div>
        }
    // switch(props){
    //     case 'AAPL':
    //         return 
    // }
    console.log(params);
    return(
        <h2></h2>
        
    )
}

export default Stock;