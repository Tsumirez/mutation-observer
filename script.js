const mutationObserver = new MutationObserver(entries => {
    console.log(entries);
})

const parent = document.querySelector(".parent")

//mutation observer doesn't just need an element to observe. 
//it also needs an options object telling it what to observe about the selected element
mutationObserver.observe(parent, {
    attributes: true, 
    attributeOldValue: true,  //show old value of changed attribute
    attributeFilter: ["title"] //which attributes to observe (without this options all are observed)
})

parent.id="New Id"
//ceases observing anything. A total flush.
// mutationObserver.disconnect() 

// parent.children[0].remove();

// setTimeout(() => {
//     parent.appendChild(document.createElement("div"));
// }, 100)