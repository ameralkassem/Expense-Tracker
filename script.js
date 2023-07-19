

function addItemElement(name , amount) {
    return `<li>
      <span class="remove">&#128465</span>
      <span class="text">Expense Name: ${name},</span>
      <span class="text amount"> Amount: ${amount}</span>
      <input type="text" style="display: none;"/>
    </li>`
  }
  
  function total1() {
    const expenseAmounts = $(".text.amount"); 
    let totalSum = 0;
  
    
    expenseAmounts.each(function() {
      const amountText = $(this).text().match(/Amount: (\d+(\.\d+)?)/);
      if (amountText) {
        const amount = parseFloat(amountText[1]);
        totalSum += amount;
      }
    });
  
    $("#total").text(totalSum.toFixed(2));
  }
  
  function add(){
    const nameInput = $("#input-name");
    const amountInput = $("#input-amount");
    const addList = $("#expense-list");
  
    const name = nameInput.val().trim();
    const amount = parseFloat(amountInput.val());
  
    if (nameInput.val().trim() === "" || amountInput.val().trim() === "") return;
  
    const addItem = $(addItemElement(nameInput.val(), amountInput.val()));
  
    addItem.find(".remove").click(function () {
      addItem.remove()
      total1();
      
    })
  
    addList.append(addItem);
    nameInput.val("");
    amountInput.val("");
    total1();
    
  
  }
  
  $( document ).ready(function() {
  
    const addButton = $("#add-btn");
  
    addButton.click(add);
  
  
    $("#input-name").keyup(function (event) {
      if (event.keyCode === 13) {
          $("#input-amount").focus()  
      }
    });
  
    $("#input-amount").keyup(function (event) {
      if (event.keyCode === 13) {
          add()
      }
    })
  
  });
  