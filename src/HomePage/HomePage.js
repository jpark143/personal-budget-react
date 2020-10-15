import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from "react-chartjs-2";

function HomePage() {
 
    const [ chartData, setChartData ] = useState({
    datasets: [
        {
            data: [1,2,3,4,5,6,7],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                'red',
                'green',
                'gray'
            ],
        }
    ],
    labels: []
});
        
useEffect(() => {
    axios.get('http://localhost:5000/pb/budget').then(function(res){
    console.log(res);
    //let data=[];
    let myData = chartData;
    //let labels=[];
    for (var i = 0; i < res.data.myBudget.length; i++){
        //data.push(res.data.myBudget[i].budget);
        //labels.push(res.data.myBudget[i].budget);
        myData.datasets[0].data[i]=res.data.myBudget[i].budget;
        myData.labels[i]=res.data.myBudget[i].title;
        }
    
    setChartData(myData);
 });
    
} );

  return (
    <main className="center" id="main">

        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Chart</h1>
                <p>
                    <Pie data={chartData} width={400} height={400}/>
                </p>
            </article>

        </div>

    </main>
  );
}

export default HomePage;
