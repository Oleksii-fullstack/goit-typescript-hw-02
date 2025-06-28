type ErrorMessageProps = {
  error?: string;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <div>Sorry, something went wrong {error}</div>;
};

export default ErrorMessage;
