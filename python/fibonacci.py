

import math
from functools import lru_cache


@lru_cache
def r_fibonacci(n):
    """Returns the nth term of the fibonacci sequence recursively using a cache.

    Args:
        n (int): The nth term of the fibonacci sequence.

    Returns:
        int: The nth term of the fibonacci sequence.
    """

    if n == 0:
        return 0
    if n == 1:
        return 1

    return r_fibonacci(n - 1) + r_fibonacci(n - 2)


def fibonacci(n):
    """Returns the nth term of the fibonacci sequence.

    Args:
        n (int): The nth term of the fibonacci sequence.

    Returns:
        int: The nth term of the fibonacci sequence.
    """

    a, b = 0, 1

    for _ in range(n):
        a, b = b, a + b

    return a


def mathyFib(n):
    """
    Returns the nth term of the fibonacci sequence using the closed form equation of the
    fibonacci sequence.

    Args:
        n (int): The nth term of the fibonacci sequence.

    Returns:
        int: The nth term of the fibonacci sequence.
    """

    square_root_5 = 2.23606797749979   # math.sqrt(5)
    phi           = 1.618033988749895  # (1 + math.sqrt(5)) / 2

    return math.ceil((phi ** n - (-phi) ** (-n)) / square_root_5)
