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

const textMutationObserver = new MutationObserver(entries => {
    console.log(entries);
})
//observe changes in element's text
//changing element's text will not be caught because element that is observed does not change.
//what changes is the text node which is it's child, not element itself.
//to prevent that mishap either observe the text node directly, os use subtree option
//to observe anything inside the selected element as well, no matter how deep.
textMutationObserver.observe(parent,{
    subtree: true,
    characterData: true,
    characterDataOldValue: true
})