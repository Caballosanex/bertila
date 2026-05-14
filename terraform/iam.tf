data "aws_iam_policy_document" "amplify_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type = "Service"
      identifiers = [
        "amplify.amazonaws.com",
        "amplify.eu-west-1.amazonaws.com",
        "amplifybackend.amazonaws.com",
      ]
    }
  }
}

resource "aws_iam_role" "amplify" {
  name               = "${var.app_name}-amplify-service-role"
  description        = "Service role used by Amplify Hosting to build the ${var.app_name} app and write build logs."
  assume_role_policy = data.aws_iam_policy_document.amplify_assume_role.json
}

# AWS-managed policy specifically designed for the Amplify service role.
# Grants access to CloudWatch Logs for builds and other Amplify-managed resources.
resource "aws_iam_role_policy_attachment" "amplify_admin" {
  role       = aws_iam_role.amplify.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess-Amplify"
}
