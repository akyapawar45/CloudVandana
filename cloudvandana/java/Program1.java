public class Program1 {
    public static void main(String[] args) {

        int[] array = { 1, 2, 3, 4, 5, 6, 7 };

        customShuffle(array);

        System.out.print("Shuffled array: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    private static void customShuffle(int[] array) {
        int n = array.length;
        for (int i = 0; i < n; i++) {

            int randomIndex = (i + 23) % n;

            int temp = array[randomIndex];
            array[randomIndex] = array[i];
            array[i] = temp;
        }
    }
}
