//your JS code here. If required.
// Corrected Test Case 1: Verifying Elements Existence
cy.visit(baseUrl + "/main.html");
cy.get("#verification_heading").should("have.text", "Verify Your Account");
cy.get("#verification_subtext").should("exist");
cy.get(".code-container").find("input.code").should("have.length", 6);

// Corrected Test Case 2: Typing OTP Digits
cy.visit(baseUrl + "/main.html");
cy.get("#code1").type("5");
cy.get("#code2").type("1");
cy.get("#code3").type("7");
cy.get("#code4").type("2");
cy.get("#code5").type("9");
cy.get("#code6").type("6");

// Corrected Test Case 3: Simulating Backspace Key Press
cy.visit(baseUrl + "/main.html");
cy.get("#code6").type("{backspace}");
cy.get("#code5").type("{backspace}");
cy.get("#code4").type("{backspace}");
cy.get("#code3").type("{backspace}");
cy.get("#code2").type("{backspace}");
cy.get("#code1").type("{backspace}");
