function print(value){
    document.getElementById("console").innerHTML = value    
}

function help(){
    console.warn(`Here are some of my functions:
    print() => console.log's out the value you gave as the paramater,
    What, do you want more? Go find out the other function yourself!
    (there is a super secret function btw)
    `)
}

function super_secret_function(){
    alert("Ah yes, you found my super secret function... You will be rewarded...")
    print("You know what you will be rewarded with? Something Really Good!!")
}

function what_is_the_reward(){
    print("It is this website's ownership!! Do you want it?")
}

function yes(){
    print("Haha I was joking I wont give it to you lmfaoo now close the page")
}

function no(){
    print("Alright, now close this page")
}

