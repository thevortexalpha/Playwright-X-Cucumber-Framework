Feature: E-Commerce works

    @Regression
    Scenario: Placing an order
    Given A login to Ecommerce application with "kovey86773@grassdev.com" and "NoPeaking>--<"
    When Add "IPHONE 13 PRO" to cart
    Then Verify "IPHONE 13 PRO" is displayed on cart section
    When Enter valid details and place an order
    Then Verify order is present in the order history

    @ErrorCheck
    Scenario Outline: Placing an order
        Given A login to Ecommerce2 application with "<UserName>" and "<Password>"
        Then verify error message is displayed

    Examples:
    | UserName                 | Password       |
    | vsvatheking@grassdev.com | thisispassword |
    | wahateverid@bruhdevs.com | whatisapasswor |
    | vsvatheking              | learning       |