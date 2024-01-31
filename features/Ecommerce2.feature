Feature: E-Commerce works
    @ErrorCheck
    Scenario Outline: Placing an order
        Given A login to Ecommerce2 application with "<UserName>" and "<Password>"
        Then verify error message is displayed

    Examples:
    | UserName                 | Password       |
    | vsvatheking@grassdev.com | thisispassword |
    | wahateverid@bruhdevs.com | whatisapasswor |
    | vsvatheking              | learning       |