import React from "react";
import Categories from "./Categories";


const StatisticsContainer = props => {
    // debugger
    return (
        <>
            <Categories
                categories={props.categories}
                deleteCategory={props.deleteCategory}
                totalCost={props.totalCost}
                pieData={props.pieData}

            />
        </>
    )
}


export default StatisticsContainer;