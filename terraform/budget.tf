resource "aws_budgets_budget" "monthly_cap" {
  name         = "${var.app_name}-monthly-cap"
  budget_type  = "COST"
  limit_amount = "6.00"
  limit_unit   = "USD"
  time_unit    = "MONTHLY"

  # Cover all account spend so we catch any unexpected resource.
  # (No filters — every service counts toward the budget.)

  # Email when actual spend hits 80% of the cap.
  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 80
    threshold_type             = "PERCENTAGE"
    notification_type          = "ACTUAL"
    subscriber_email_addresses = [var.budget_alert_email]
  }

  # Email when forecast suggests we will overshoot.
  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 100
    threshold_type             = "PERCENTAGE"
    notification_type          = "FORECASTED"
    subscriber_email_addresses = [var.budget_alert_email]
  }
}
